export default function Page() {
  const products = [
    {
      name: "Home Storage",
      desc: "Practical and stylish storage solutions for everyday organization.",
      image: "/home-storage.png",
    },
    {
      name: "Kitchen Accessories",
      desc: "Useful kitchen tools designed for convenience and efficiency.",
      image: "/kitchen-accessory.png",
    },
    {
      name: "Outdoor Items",
      desc: "Reliable outdoor essentials for travel, camping, and daily use.",
      image: "/outdoor-item.png",
    },
    {
      name: "Car Accessories",
      desc: "Modern car accessories for comfort, convenience, and smart driving.",
      image: "/car-accessory.png",
    },
  ];

  return (
    <main
      style={{
        padding: "30px",
        maxWidth: "1200px",
        margin: "0 auto",
        background: "#f7f8fa",
      }}
    >
      {/* Header */}
      <header style={{ textAlign: "center", marginBottom: "50px" }}>
        <img
          src="/logo.png"
          alt="NEXORA Logo"
          style={{
            maxWidth: "330px",
            width: "100%",
            height: "auto",
            marginBottom: "20px",
          }}
        />

        <h1
          style={{
            fontSize: "42px",
            margin: "10px 0",
            color: "#0f2f57",
            letterSpacing: "2px",
          }}
        >
          NEXORA
        </h1>

        <p style={{ fontSize: "20px", color: "#4b5563", margin: 0 }}>
          Smart Essentials for Everyday Life
        </p>
      </header>

      {/* Brand Story */}
      <section
        style={{
          background: "#ffffff",
          padding: "30px",
          borderRadius: "16px",
          marginBottom: "40px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        }}
      >
        <h2 style={{ color: "#0f2f57", marginBottom: "15px" }}>Our Story</h2>

        <p style={{ color: "#333", lineHeight: "1.8", fontSize: "16px" }}>
          NEXORA is a modern lifestyle brand focused on practical, stylish, and
          reliable everyday essentials. Our products cover home storage, kitchen
          accessories, outdoor items, car accessories, and smart daily-use
          solutions designed to make life easier, more organized, and more
          convenient.
        </p>
      </section>

      {/* Product Categories */}
      <section style={{ marginBottom: "40px" }}>
        <h2
          style={{
            textAlign: "center",
            color: "#0f2f57",
            marginBottom: "30px",
          }}
        >
          Our Product Categories
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "25px",
          }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              style={{
                background: "#ffffff",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              <div style={{ padding: "20px" }}>
                <h3 style={{ margin: "0 0 10px", color: "#0f2f57" }}>
                  {product.name}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "#555",
                    lineHeight: "1.6",
                    fontSize: "15px",
                  }}
                >
                  {product.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Values */}
      <section
        style={{
          background: "#ffffff",
          padding: "30px",
          borderRadius: "16px",
          marginBottom: "40px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        }}
      >
        <h2 style={{ color: "#0f2f57", marginBottom: "20px" }}>
          Why Choose NEXORA
        </h2>

        <ul
          style={{
            color: "#333",
            lineHeight: "2",
            paddingLeft: "20px",
            fontSize: "16px",
          }}
        >
          <li>Premium Quality</li>
          <li>Everyday Convenience</li>
          <li>Smart Solutions</li>
          <li>Modern Design</li>
        </ul>
      </section>

      {/* Contact */}
      <section
        style={{
          background: "#ffffff",
          padding: "30px",
          borderRadius: "16px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        }}
      >
        <h2 style={{ color: "#0f2f57", marginBottom: "15px" }}>Contact Us</h2>

        <p
          style={{
            color: "#333",
            lineHeight: "1.8",
            fontSize: "16px",
            margin: 0,
          }}
        >
          Email: gonglei842@gmail.com
        </p>
      </section>
    </main>
  );
}
