import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import Link from "next/link";




class FileProduct extends React.Component {
  // constructor(props){
  //   super(props)
  //   // this.state = {
  //   //   buy : []
  //   // }
  // }

  // async componentDidMount() {
  //   const productBuy = await axios.get("https://api.mercadolibre.com/items/MLA773274530")
  // console.log(productBuy.data)
  //   const producto = productBuy.data
  //  this.setState=({
  //    buy:producto

  //  })

  // }

  static async getInitialProps({ req, query }) {
    console.log(123)


    const productBuy = await axios.get("https://api.mercadolibre.com/items/MLA773274530")
    console.log(productBuy.data)
    const producto= productBuy.data
    return {
      producto
    }
  }

  

  render() {
    return (
      <div>
        <p>hola soy file </p>
      


      <Link href="/carrito" as="carrito"><button>comprar</button></Link>


      </div>
    )
  }
}

export default connect()(FileProduct)