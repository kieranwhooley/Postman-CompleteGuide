let response = pm.response.json();
pm.globals.set("doneListId", response.id);

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Board name is DONE", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql("DONE");
});
pm.test("DONE List is not closed", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.closed).to.eql(false);
});

pm.test("DONE list is in PostmanTestBoard", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.idBoard).to.eql(pm.globals.get('boardId'));
});