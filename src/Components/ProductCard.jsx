import React from "react";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="rating">
        {
          <svg
            width="109"
            height="21"
            viewBox="0 0 109 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_37_38)">
              <path
                d="M10.818 1.48633L13.2371 8.44466L20.603 8.59549L14.7321 13.0463L16.8655 20.098L10.8171 15.8897L4.77048 20.098L6.90381 13.0463L1.03381 8.59549L8.39965 8.44549L10.818 1.48633Z"
                fill="#FFC700"
              />
            </g>
            <g clip-path="url(#clip1_37_38)">
              <path
                d="M32.818 1.48633L35.2371 8.44466L42.603 8.59549L36.7321 13.0463L38.8655 20.098L32.8171 15.8897L26.7705 20.098L28.9038 13.0463L23.0338 8.59549L30.3996 8.44549L32.818 1.48633Z"
                fill="#FFC700"
              />
            </g>
            <g clip-path="url(#clip2_37_38)">
              <path
                d="M54.818 1.48633L57.2371 8.44466L64.603 8.59549L58.7321 13.0463L60.8655 20.098L54.8171 15.8897L48.7705 20.098L50.9038 13.0463L45.0338 8.59549L52.3996 8.44549L54.818 1.48633Z"
                fill="#FFC700"
              />
            </g>
            <g clip-path="url(#clip3_37_38)">
              <path
                d="M76.818 1.48633L79.2371 8.44466L86.603 8.59549L80.7321 13.0463L82.8655 20.098L76.8171 15.8897L70.7705 20.098L72.9038 13.0463L67.0338 8.59549L74.3996 8.44549L76.818 1.48633Z"
                fill="#FFC700"
              />
            </g>
            <g clip-path="url(#clip4_37_38)">
              <path
                d="M98.818 1.48633L101.237 8.44466L108.603 8.59549L102.732 13.0463L104.865 20.098L98.8171 15.8897L92.7705 20.098L94.9038 13.0463L89.0338 8.59549L96.3996 8.44549L98.818 1.48633Z"
                fill="#FFC700"
              />
            </g>
            <defs>
              <clipPath id="clip0_37_38">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(0.817139 0.961426)"
                />
              </clipPath>
              <clipPath id="clip1_37_38">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(22.8171 0.961426)"
                />
              </clipPath>
              <clipPath id="clip2_37_38">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(44.8171 0.961426)"
                />
              </clipPath>
              <clipPath id="clip3_37_38">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(66.8171 0.961426)"
                />
              </clipPath>
              <clipPath id="clip4_37_38">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(88.8171 0.961426)"
                />
              </clipPath>
            </defs>
          </svg>
        }
      </div>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button className="add-to-cart" class="add">
        +
      </button>
    </div>
  );
}

export default ProductCard;