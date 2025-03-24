module.exports = (data) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.name}'s Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>${data.name}</h1>
        <h3>${data.location}</h3>
        <p>${data.bio}</p>
        <div class="links">
            <a href="${data.linkedin}" target="_blank">LinkedIn</a>
            <a href="${data.github}" target="_blank">GitHub</a>
        </div>
    </div>
</body>
</html>
`;
};
