var course = {
    term: '1198',
    sis_id: '10327',
    subject: 'CS',
    catalog_number: '2150',
    folder: ''
}

function makeAJAX() {
    var saveData = $.ajax({
        type: 'POST',
        url: "/ajax",
        data: {
            type: 'cart_op',
            append: true,
            bin: '1',
            course
        },
        dataType: "text",
        success: res => { console.log("AJAX responded " + res) }
    });
}
