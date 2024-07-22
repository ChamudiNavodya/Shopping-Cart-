import React,{useState} from 'react';
import { useEffect } from 'react';
import "../styles/cart.css";    
import jsPDF from 'jspdf';

const Cart = ({cart, setCart, handleChange}) => {
    const [price, setPrice] = useState(0);
    const [show, setShow] = useState(false);

    const handlePrice = ()=>{
        let ans = 0;
        cart.map((item)=>(
            ans += item.amount * item.price
        ))
        setPrice(ans);
    }

    const handleRemove = (id) =>{
        const arr = cart.filter((item)=>item.id !== id);
        setCart(arr);
        // handlePrice();
    }

    const generatePDFReport = () => {
        const doc = new jsPDF();
        doc.text('Bill for the Order', 10, 10);
      
        cart.forEach((item, index) => {
          const yPos = 30 + index * 40; // Adjust the line spacing
          doc.text(`Item: ${item.title}`, 10, yPos);
          doc.text(`Quantity: ${item.amount}`, 10, yPos + 10);
          doc.text(`Price: ${item.price}`, 10, yPos + 20);
        });
      
        const totalYPos = 30 + cart.length * 40; // Adjust the line spacing for total
        doc.text(`Total Price: Rs - ${price}`, 10, totalYPos + 10);
      
        doc.save('Bill.pdf');
        window.location.reload();
    };

    useEffect(()=>{
        handlePrice();
    })

  return (
    <article>
        {
            cart?.map((item)=>(
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img src={item.img} />
                        <p>{item.title}</p>
                    </div>
                    <div>
                        <button onClick={()=>handleChange(item, +1)}> + </button>
                        <button>{item.amount}</button>
                        <button onClick={()=>handleChange(item, -1)}> - </button>
                    </div>
                    <div>
                        <span>{item.price}</span>
                        <button onClick={()=>handleRemove(item.id)} >Remove</button>
                    </div>
                </div>
            ))}
        <div className='total'>
            <span>Total Price of your Cart</span>
            <span>Rs - {price}</span>
        </div>
        
        <span className="order" onClick={generatePDFReport}>
        Order Confirm 
         </span>

         {/* <button onClick={generatePDFReport}>Generate PDF Report</button> */}

    </article>
  )
}

export default Cart