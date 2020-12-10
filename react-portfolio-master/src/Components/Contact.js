import React, { useState } from 'react';

const Contact = ({ data }) => {
   const [url, setUrl] = useState('mailto:test@example.com?subject=subject&body=body');
   const [name, setName] = useState('');
   const [subject, setSubject] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');

   console.log(data)

    const handleClick = (e) => {
       e.preventDefault();
      window.open(`mailto:${email}?subject=${subject}&body=${name}: ${message}`);
    }
    

    return (
      <section id="contact">

         


            
               <div className="widget widget_contact">
<center>
					   <h4>Address and Phone</h4>
					   <p className="address">
						   {data?.name}<br />
						   {data?.address.street} <br />
						   {data?.address.city}, {data?.address.state} {data?.address.zip}<br />
						   <span>{data?.phone}</span>
					   </p>
                  </center>
				   </div>

               <div className="widget widget_tweets">

		         </div>
         
      
   </section>
    );
}

export default Contact;
