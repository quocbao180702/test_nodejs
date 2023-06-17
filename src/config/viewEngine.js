import express from "express";

// app chính là expresss
const configViewEngine = (app) => {
    //quyền được chỉ truy cập vào folder public, không cho vào nhưng file khác
    app.use(express.static('./src/public'));
    app.set("view engine", "ejs");
    app.set("views","./src/view");
}

// với js muốn share function giữa các file khác nhau
// chúng ta sử dụng câu lệnh export
export default configViewEngine;


