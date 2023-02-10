import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Nicole C.",
      title: "Chandler, AZ",
      img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      desc: '"Very honest and professional!  Had our A/C up and running in no time at reasonable fair price!  Thanks Trint!"',
    },
    {
      id: 2,
      name: "Shannon C.",
      title: "Chandler, AZ",
      img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      desc: '"I cannot even begin to leave a great enough review! I am 8 months pregnant and got home from the store today to realize my AC was out. I looked on Yelp for an AC repair company and I found this one. Trint told me he would call me back in 10 min to see if he could get someone out. He called back and he was here right away. He was professional, friendly and efficient. He diagnosed the problem, explained it to me in a way I could understand and then fixed the issue right away because he had the part on his truck. I will definitely be using them again and will refer them to everyone I know. Thank you!!!!"',
      featured: true,
    },
    {
      id: 3,
      name: "Simple C.",
      title: "Gilbert, AZ",
      img: '"https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"',
      desc: "Air express rocks ,great value, professional and honest. They don't try to up sell you. ",
    },
  ];
  return (
    <div className="reviews" id="reviews">
      <h1>Reviews</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
      <div className="mobile">
        {data.map((d) => (
          <div className="review">
            "{d.desc}" -{d.name}
          </div>
        ))}
      </div>
    </div>
  );
}
