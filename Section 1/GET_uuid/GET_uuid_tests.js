let response = pm.response.json();
pm.globals.set("uuid", response.uuid);

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});