let response = pm.response.json();
pm.globals.set("todoListId", response.id);

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Board name is TODO", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql("TODO");
});
pm.test("TODO list is not closed", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.closed).to.eql(false);
});

pm.test("TODO list is in PostmanTestBoard", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.idBoard).to.eql(pm.globals.get('boardId'));
});