//pagination
$(function () {
    let container = $("#page_navigation");
    container.pagination({
      dataSource: JSON.parse(localStorage.getItem("userData")),
      pageSize: 3,
      callback: function (data, pagination) {
        var tableRow = "";
        if (pagination.direction === -1) {
          document.getElementById("tblbody").innerHTML = "";
        }
        console.log(data, pagination);
        $.each(data, function (index, item) {
          var btnEditId = "btnedit" + item.id;
          var btnDeleteId = "btndelete" + item.id;
          tableRow =
            "<tr class='page-data' Id='" +
            item.id +
            "'   data-CustomerID='" +
            item.id +
            "'   data-name='" +
            item.name +
            "' data-email='" +
            item.email +
            "' data-gender='" +
            item.gender +
            "' data-status='" +
            item.status +
            "'>" +
            "<td class='td-data'>" +
            item.id +
            "</td>" +
            "<td class='td-data'>" +
            item.name +
            "</td>" +
            "<td class='td-data'>" +
            item.email +
            "</td>" +
            "<td class='td-data'>" +
            item.gender +
            "</td>" +
            "<td class='td-data'>" +
            item.status +
            "</td>" +
            "<td class='td-data'>" +
            "<button id='" +
            btnEditId +
            "' class='btn btn-info btn-xs btn-editcustomer' onclick='showEditRow(" +
            item.id +
            ")'><i class='fa fa-pencil' aria-hidden='true'></i>Edit</button>" +
            "<button id='" +
            btnDeleteId +
            "' class='btn btn-danger btn-xs btn-deleteCustomer' onclick='deleteRow(" +
            item.id +
            ")'><i class='fa fa-trash' aria-hidden='true'>Delete</button>" +
            "</td>" +
            "</tr>";

          document.getElementById("tblbody").innerHTML += tableRow;
        });

        // $("#tblbody").html(dataHtml);
      },
    });
  });