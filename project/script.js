// script.js

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // 防止表单默认提交

    // 获取表单数据
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const course = document.getElementById('course').value;
    const message = document.getElementById('message').value;

    // 创建请求数据对象
    const data = {
        name: name,
        email: email,
        course: course,
        message: message
    };

    // 发送POST请求到豆包API
    fetch('https://api.doubao.com/contact', { // 替换为实际的豆包API端点
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': '' // 替换为您的API密钥
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        // 处理成功响应
        document.getElementById('responseMessage').innerText = '提交成功！我们会尽快联系您。';
        document.getElementById('contactForm').reset();
    })
    .catch((error) => {
        // 处理错误响应
        console.error('Error:', error);
        document.getElementById('responseMessage').innerText = '提交失败，请稍后再试。';
    });
});
