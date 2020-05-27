pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Card name is still Learn Postman after moving to new list", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql("Learn Postman");
});
pm.test("Card is on DONE list", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.idList).to.eql(pm.globals.get('doneListId'));
});