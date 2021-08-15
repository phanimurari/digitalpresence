import React from 'react'
import HoverImage from 'react-hover-image'

const imageSrc =
  'https://res.cloudinary.com/imphanimurari/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1628421712/Portfolio/WhatsApp_Image_2021-08-08_at_4.50.35_PM_2_bgm46k.jpg'

const onHoverImageSrc =
  'https://res.cloudinary.com/imphanimurari/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1628418836/Portfolio/WhatsApp_Image_2021-08-08_at_3.58.54_PM_woo17n.jpg'

const OnHoverImage: React.SFC = () => {
  return <HoverImage src={imageSrc} hoverSrc={onHoverImageSrc} />
}

export default OnHoverImage
