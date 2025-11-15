const products = [
    {
        id: 1,
        title: "Iphone 17",
        category: "iphone",
        stock: 5,
        price: 1500000,
        img: "/images/iphone/iphone-17.jpg"
    },
    {
        id: 2,
        title: "Iphone 16 Pro Max",
        category: "iphone",
        stock: 3,
        price: 1200000,
        img: "/images/iphone/iphone-16-pro-max-256gb-white-titanium.jpg"
    },
    {
        id: 3,
        title: "Iphone 16",
        category: "iphone",
        stock: 3,
        price: 1050000,
        img: "/images/iphone/iphone-16-256gb-black.jpg"
    },
    {
        id: 4,
        title: "Iphone Air",
        category: "iphone",
        stock: 3,
        price: 1100000,
        img: "/images/iphone/iphone-air.jpg"
    },
    {
        id: 5,
        title: "Samsung S25 Ultra",
        category: "samsung",
        stock: 6,
        price: 1700000,
        img: "/images/samsung/s25-ultra.png"
    },
    {
        id: 6,
        title: "Samsung S25 Plus",
        category: "samsung",
        stock: 2,
        price: 1300000,
        img: "/images/samsung/s25-plus.png"
    },
    {
        id: 7,
        title: "Samsung A56",
        category: "samsung",
        stock: 6,
        price: 950000,
        img: "/images/samsung/a-56.png"
    },
    {
        id: 8,
        title: "Samsung A54",
        category: "samsung",
        stock: 3,
        price: 750000,
        img: "/images/samsung/a-54.png"
    },
    {
        id: 9,
        title: "Samsung A36",
        category: "samsung",
        stock: 7,
        price: 600000,
        img: "/images/samsung/a-36.png"
    },
    {
        id: 10,
        title: "Xiaomi 17 Pro Max",
        category: "xiaomi",
        stock: 4,
        price: 1300000,
        img: "/images/xiaomi/xiaomi-17-pro-max.png"
    },
    {
        id: 11,
        title: "Xiaomi 15 Ultra",
        category: "xiaomi",
        stock: 4,
        price: 1050000,
        img: "/images/xiaomi/xiaomi-15-ultra.png"
    },
    {
        id: 12,
        title: "Xiaomi 14T",
        category: "xiaomi",
        stock: 3,
        price: 950000,
        img: "/images/xiaomi/xiaomi-14-t.jpg"
    },
    {
        id: 13,
        title: "Honor 400 Pro",
        category: "honor",
        stock: 3,
        price: 1300000,
        img: "/images/honor/honor-400-pro.jpg"
    },
    {
        id: 14,
        title: "Honor 400",
        category: "honor",
        stock: 3,
        price: 1150000,
        img: "/images/honor/Honor-400-512gb-5G-negro-frente.png"
    },
    {
        id: 15,
        title: "Honor Magic 6 Pro",
        category: "honor",
        stock: 4,
        price: 950000,
        img: "/images/honor/honor-magic-6-pro.jpg"
    }
];

const getData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
};

export function getProductById(idParam) {
    return new Promise((resolve) => {
        const itemRequested = products.find((item) => String(item.id) === String(idParam));
        setTimeout(() => resolve(itemRequested), 1000);
    });
}

export function getProductByCategory(catParam) {
    return new Promise((resolve) => {
        const itemsRequested = products.filter(
            (item) => item.category.toLowerCase() === catParam.toLowerCase()
        );
        setTimeout(() => resolve(itemsRequested), 1000);
    });
}

export {products}
export default getData;
