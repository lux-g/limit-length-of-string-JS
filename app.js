const text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda cumque tempore nisi quae magnam qui, recusandae cupiditate voluptatibus ut sequi?"

const truncate = (string, num) => {
    return string.length > num ? string.substr(0, num -1) + "..." : string;
}

console.log(truncate(text, 100))
