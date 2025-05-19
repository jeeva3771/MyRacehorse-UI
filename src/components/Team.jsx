// import React from "react";

// export const Team = (props) => {
//   return (
//     <div id="team" className="text-center">
//       <div className="container">
//         <div className="col-md-8 col-md-offset-2 section-title">
//           <div class="text-center">
//             <h2>MYRACEHORSE IN THE <span class="northwellHeading fs-40">Winners Circle</span></h2>
//           </div>
//         </div>
//         <div id="row">
//           {props.data
//             ? props.data.map((d, i) => (
//                 <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
//                   <div className="thumbnail">
//                     {" "}
//                     <img src={d.img} alt="..." className="team-img" />
//                     <div className="caption">
//                       <h4>{d.name}</h4>
//                       <p>{d.job}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             : "loading"}
//         </div>
//       </div>
//     </div>
//   );
// };
import React, { useState, useEffect } from "react";

export const Team = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;
  
  // Use the data from props or default data if not available
  const teamData = [
    { img: "//cdnm.myracehorse.com/wp-content/uploads/elementor/thumbs/Recent-Winners-In-the-Winners-Circle-r52o8awvll7kgdrgkd100w64unsofno2thxymt9b4w.png" },
    { img: "//cdnm.myracehorse.com/wp-content/uploads/elementor/thumbs/Cable-Boss-win-r4cruypeqwsholagkk4z3zn2qb2wk9lkoht22gx674.png" },
    { img: "//cdnm.myracehorse.com/wp-content/uploads/elementor/thumbs/Recent-Winners-In-the-Winners-Circle-47-r2nvfqu425dnldh93c22ehyc7bam6x0g716wud3fds.png" },
    { img: "//cdnm.myracehorse.com/wp-content/uploads/elementor/thumbs/Recent-Winners-In-the-Winners-Circle-46-r2nv4szqikeigrdbz3tdvrc7av7tlqkx0vugrfbdsw.png" },
    { img: "//cdnm.myracehorse.com/wp-content/uploads/elementor/thumbs/Recent-Winners-In-the-Winners-Circle-45-r269hl83dnkgonxmgbywnl8z5iso0ymvrukoffqe8w.png" },
    { img: "//cdnm.myracehorse.com/wp-content/uploads/elementor/thumbs/Recent-Winners-In-the-Winners-Circle-44-r1owyyvbeqjzl57163g9l01qycrub06sp7gkqqxti8.png" },
    { img: "//cdnm.myracehorse.com/wp-content/uploads/elementor/thumbs/Recent-Winners-In-the-Winners-Circle-43-r1i5sptqhcn8a78euitbwltkm3d2x7f23opwm4ydnk.png" },
    { img: "//cdnm.myracehorse.com/wp-content/uploads/elementor/thumbs/Recent-Winners-In-the-Winners-Circle-42-r1glzv30dyobnl7f56n22j7cmsqygienws6ff7i3kw.png" },
    { img: "//cdnm.myracehorse.com/wp-content/uploads/elementor/thumbs/Recent-Winners-In-the-Winners-Circle-41-r1gboe95i05xfas7945t6rsh9xnxiopgi6tgrka4kg.png" },
    { img: "//cdnm.myracehorse.com/wp-content/uploads/elementor/thumbs/Recent-Winners-In-the-Winners-Circle-38-r0capg2e1r9p1u1iivsmu8gc8uosmer3p0zhe7sazk.png" },
    { img: "//cdnm.myracehorse.com/wp-content/uploads/elementor/thumbs/Recent-Winners-In-the-Winners-Circle-35-qv7x3yh6w7yh3lbe2f8djtcopg0oeyysz2gqxsi7c0.png" },
    { img: "//cdnm.myracehorse.com/wp-content/uploads/elementor/thumbs/Recent-Winners-In-the-Winners-Circle-33-qujec4l083rk9zajyezx0cex6era1d8qzifwfgryxs.png" },
    { img: "//cdnm.myracehorse.com/wp-content/uploads/elementor/thumbs/Recent-Winners-In-the-Winners-Circle-32-qujdkal1upnwhnq0hdvm6d9jxny040qvtr0aui1n6o.png" },
  ];

  const maxIndex = Math.max(0, teamData.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(maxIndex, prevIndex + 1));
  };

  const visibleItems = teamData.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <div id="team" className="text-center" style={{ padding: "60px 0" }}>
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 15px" }}>
        <div className="section-title" style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "15px" }}>
            MYRACEHORSE IN THE{" "}
            <span style={{ fontStyle: "italic", color: "#e91e63" }}>Winners Circle</span>
          </h2>
        </div>
        
        <div style={{ position: "relative" }}>
          {/* Left Navigation Arrow */}
          <button 
            onClick={handlePrev} 
            disabled={currentIndex === 0}
            style={{
              position: "absolute",
              top: "50%",
              left: "-30px",
              transform: "translateY(-50%)",
              background: "white",
              border: "1px solid #ddd",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              cursor: currentIndex === 0 ? "not-allowed" : "pointer",
              zIndex: 10,
              opacity: currentIndex === 0 ? 0.5 : 1,
              fontSize: "24px"
            }}
            aria-label="Previous"
          >
            &lsaquo;
          </button>
          
          {/* Right Navigation Arrow */}
          <button 
            onClick={handleNext} 
            disabled={currentIndex >= maxIndex}
            style={{
              position: "absolute",
              top: "50%",
              right: "-30px",
              transform: "translateY(-50%)",
              background: "white",
              border: "1px solid #ddd",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              cursor: currentIndex >= maxIndex ? "not-allowed" : "pointer",
              zIndex: 10,
              opacity: currentIndex >= maxIndex ? 0.5 : 1,
              fontSize: "24px"
            }}
            aria-label="Next"
          >
            &rsaquo;
          </button>
          
          {/* Carousel Content */}
          <div style={{ overflow: "hidden" }}>
            <div id="row" style={{ 
              display: "flex",
              transition: "transform 0.5s ease",
              transform: `translateX(0)` 
            }}>
              {visibleItems.map((d, i) => (
                <div key={`${d.name}-${i}`} style={{ 
                  flex: "0 0 33.333%", 
                  padding: "0 15px",
                  boxSizing: "border-box" 
                }}>
                  <div className="thumbnail" style={{ 
                    background: "white", 
                    borderRadius: "4px", 
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                    overflow: "hidden",
                    height: "100%"
                  }}>
                    <img 
                      src={d.img} 
                      alt={d.name} 
                      className="team-img" 
                      style={{ width: "100%", height: "250px", objectFit: "cover" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Pagination Dots */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                style={{
                  width: "10px",
                  height: "10px",
                  margin: "0 5px",
                  borderRadius: "50%",
                  background: currentIndex === index ? "#e91e63" : "#ddd",
                  border: "none",
                  cursor: "pointer"
                }}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

