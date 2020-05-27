let response = pm.response.json();
pm.globals.set("boardId", response.id);

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Board name is correct", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql("PostmanTestBoard");
});
