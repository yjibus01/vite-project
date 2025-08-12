import React, { useState } from 'react';

export default function KioskApp() {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  // 메뉴 데이터
  const menuItems = [
    {
      id: 1,
      name: "트레디셔널 다크",
      englishName: "Traditional Dark",
      description: "고소한 아로마와 강렬한 바디감",
      price: 7000,
      image: "https://ecimg.cafe24img.com/pg594b08546552063/brownhaus1/web/product/medium/20240125/313770e8b0efd7ec72508a5e3b737ddf.jpg"
    },
    {
      id: 2,
      name: "이클립스 골드",
      englishName: "Eclips Gold",
      description: "은은하고 부드러운 단맛의 편안함",
      price: 7500,
      image: "https://ecimg.cafe24img.com/pg594b08546552063/brownhaus1/web/product/medium/20240125/d52fd593173234c09fdde725bf54f85d.jpg"
    },
    {
      id: 3,
      name: "레인 에스프레소",
      englishName: "Lane Espresso",
      description: "다크 초콜릿 뉘앙스의 훌륭한 밸런스",
      price: 5900,
      image: "https://ecimg.cafe24img.com/pg594b08546552063/brownhaus1/web/product/medium/20240125/58cb7a930209cd8853230f7eedf16602.jpg"
    }
  ];

  // 장바구니에 추가
  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    
    setTotalAmount(totalAmount + item.price);
  };

  // 장바구니에서 수량 증가
  const increaseQuantity = (id) => {
    const item = cart.find(cartItem => cartItem.id === id);
    setCart(cart.map(cartItem => 
      cartItem.id === id 
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    ));
    setTotalAmount(totalAmount + item.price);
  };

  // 장바구니에서 수량 감소
  const decreaseQuantity = (id) => {
    const item = cart.find(cartItem => cartItem.id === id);
    
    if (item.quantity === 1) {
      setCart(cart.filter(cartItem => cartItem.id !== id));
    } else {
      setCart(cart.map(cartItem => 
        cartItem.id === id 
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ));
    }
    setTotalAmount(totalAmount - item.price);
  };

  return (
    <div>
      {/* Google Material Symbols 폰트 불러오기 */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
      
      <header className="navbar">
        <div className="nav-container">
          {/* 왼쪽: 로고 */}
          <div className="nav-logo">
            <a href="/">JI'S HOUSE</a>
          </div>
        
          {/* 오른쪽: 메뉴 + 아이콘 (nav-right로 묶기) */}
          <div className="nav-right">
            <nav className="nav-menu">
              <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">MENU</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">CONTACT</a></li>
              </ul>
            </nav>
            <div className="nav-icons">
              <a href="#"><span className="material-symbols-outlined">search</span></a>
              <a href="#"><span className="material-symbols-outlined">person</span></a>
              <a href="#"><span className="material-symbols-outlined">shopping_cart</span></a>
            </div>
          </div>
        </div>
      </header>
      
      {/* 메뉴 섹션 */}
      <section className="menu">
        <h2> - Menu -</h2>
        {menuItems.map(item => (
          <article 
            key={item.id}
            onClick={() => addToCart(item)}
          >
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.englishName}</p>
            <p>{item.description}</p>
            <p>{item.price.toLocaleString()}원</p>
          </article>
        ))}
      </section>
      
      {/* 장바구니 섹션 */}
      <section className="cart">
        <h2>Cart</h2>
        <div id="cartItems">
          {cart.length === 0 ? (
            <p>장바구니가 비어있습니다.</p>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cartItem">
                <span>{item.name}</span>
                <div>
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span style={{margin: '0 10px'}}>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
                <span>{(item.price * item.quantity).toLocaleString()}원</span>
              </div>
            ))
          )}
        </div>
        <h3 className="total">
          Total: <span id="totalAmount">{totalAmount.toLocaleString()}</span>원
        </h3>
      </section>
    </div>
  );
}