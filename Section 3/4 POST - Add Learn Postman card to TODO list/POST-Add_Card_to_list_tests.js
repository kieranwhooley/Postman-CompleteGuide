let response = pm.response.json();
pm.globals.set("cardId", response.id);

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Card name is Learn Postman", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql("Learn Postman");
});
pm.test("Card is not closed", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.closed).to.eql(false);
});
pm.test("Card is on TODO list", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.idList).to.eql(pm.globals.get('todoListId'));
});
pm.test("Card is on PostmanTestBoard", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.idBoard).to.eql(pm.globals.get('boardId'));
});

pm.test("Card has no votes", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.badges.votes).to.eql(0);
});

pm.test("Card has no attachments", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.attachments.length).to.eql(0);
});