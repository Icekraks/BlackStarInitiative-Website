import type { SwiperProps, SwiperSlideProps } from "swiper/react"
//Swiper Carousel Component
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "swiper-container": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & SwiperProps
      "swiper-slide": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & SwiperSlideProps
    }
  }
}
