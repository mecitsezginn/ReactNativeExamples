import React, { Component } from 'react'
import { Text, View, TextInput,ScrollView } from 'react-native'
import { myStyle } from "./myStyle";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cad:"",
      eur:"",
      jpy:"",
      try:"",
      usd:"",
    };
}

  componentDidMount() {
    fetch('http://data.fixer.io/api/latest?access_key=e032f34d3c84f925a4a636d9aedef71b&symbols=EUR,TRY,USD,CAD,GBP')
      .then(response => response.json()) //Gelen veriri Json'a çevrilir.
      .then(posts => {
        console.log(posts); // Konsola postları uzunluğu ve postlar yazılır.
        this.setState({
          cad:posts.rates.CAD,
          eur:posts.rates.EUR,
          gbp:posts.rates.GBP,
          try:posts.rates.TRY,
          usd:posts.rates.USD,
          newusd:0,
          newtry:0,
          newcad:0,
          newgbp:0,
        })
      })
      .catch(e => {
        // Herhangi bir hata oluşursa buraya düşer.
        console.log(e);
      });
  }
  doviz(label){
    let sonuc;
    if(label === "USD/TRY")
    {
      sonuc = (this.state.try / this.state.usd).toFixed(2)
      sonuc = Number(sonuc)
    }
    if(label === "EUR/TRY")
    {
      sonuc = (this.state.try / this.state.eur).toFixed(2)
      sonuc = Number(sonuc)
    }
    if(label === "CAD/TRY")
    {
      sonuc = (this.state.try / this.state.cad).toFixed(2)
      sonuc = Number(sonuc)
    }
    if(label === "GBP/TRY")
    {
      sonuc = (this.state.try / this.state.gbp).toFixed(2)
      sonuc = Number(sonuc)
    }
    return sonuc;
  }

  euroTo(value){
    this.setState({
      newusd: (this.state.usd * value).toFixed(2),
      newtry: (this.state.try * value).toFixed(2),
      newcad: (this.state.cad * value).toFixed(2),
      newgbp: (this.state.gbp * value).toFixed(2),
    })

  }


  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={myStyle.header}>
          <Text style={myStyle.headerText}>
            Currency Converter</Text>
        </View>
        <View style={myStyle.container}>
          <View style={myStyle.container2}>

            <View>
              <View style={myStyle.currencyView}>
                <Text style={myStyle.currencyText1}>USD/TRY: {this.doviz("USD/TRY")} ₺ </Text>
                <Text style={myStyle.currencyText2}> {(this.doviz("USD/TRY") - 0.05).toFixed(2)} ₺ - {(this.doviz("USD/TRY") + 0.05).toFixed(2)} ₺</Text>
              </View>

              <View style={myStyle.currencyView}>
                <Text style={myStyle.currencyText1}>EUR/TRY: {this.doviz("EUR/TRY")} ₺ </Text>
                <Text style={myStyle.currencyText2}>{(this.doviz("EUR/TRY") - 0.05).toFixed(2)} ₺ - {(this.doviz("EUR/TRY") + 0.05).toFixed(2)} ₺</Text>
              </View>

              <View style={myStyle.currencyView}>
                <Text style={myStyle.currencyText1}>CAD/TRY: {this.doviz("CAD/TRY")} ₺ </Text>
                <Text style={myStyle.currencyText2}>{(this.doviz("CAD/TRY") - 0.05).toFixed(2)} ₺ - {(this.doviz("CAD/TRY") + 0.05).toFixed(2)} ₺</Text>
              </View>

              <View style={myStyle.currencyView}>
                <Text style={myStyle.currencyText1}>GBP/TRY: {this.doviz("GBP/TRY")} ₺ </Text>
                <Text style={myStyle.currencyText2}>{(this.doviz("GBP/TRY") - 0.05).toFixed(2)} ₺ - {(this.doviz("GBP/TRY") + 0.05).toFixed(2)} ₺</Text>
              </View>
            </View>

            <View style={myStyle.currencyView2Main}>

              <TextInput
                style={myStyle.textInputStyle}
                placeholder='Euro value'
                onChangeText={value =>{this.euroTo(value)}}
              />
              <View style={myStyle.currencyView2}>
                <Text style={myStyle.currencyText1}>USD: {this.state.newusd} ₺ </Text>
              </View>

              <View style={myStyle.currencyView2}>
                <Text style={myStyle.currencyText1}>TRY: {this.state.newtry} ₺ </Text>
              </View>

              <View style={myStyle.currencyView2}>
                <Text style={myStyle.currencyText1}>CAD: {this.state.newcad} ₺ </Text>
              </View>

              <View style={myStyle.currencyView2}>
                <Text style={myStyle.currencyText1}>GBP: {this.state.newgbp} ₺ </Text>
              </View>

            </View>

          </View>
        </View>
      </View>
    )
  }
}
