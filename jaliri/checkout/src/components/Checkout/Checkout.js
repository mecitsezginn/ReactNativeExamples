import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput,ScrollView, Alert } from 'react-native'
import styles from "./CheckoutStyles";
import Header from "../Header";
import Line from "../Line";
import IconNumber from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Checkout() {
    const [cardVisible, setCardVisible] = useState(false)
    const [cashVisible, setCashVisible] = useState(false)
    const [paypalVisible, setPaypalVisible] = useState(false)
    const [isButtonActive, setIsButtonActive] = useState(false)
    const [cardNumber, setCardNumber] = useState("")
    const [cardExpiry, setCardExpiry] = useState("")
    const [cardCVC, setCardCVC] = useState("")
    const [nameOnCard, setNameOnCard] = useState("")

    function cardFunc(value) {
        setCardNumber("");
        setCardExpiry("");
        setCardCVC("");
        if (value === "card") {
            if (cardVisible === true) { 
                setCardVisible(false); 
                setIsButtonActive(false); 
            }
            else { 
                setCardVisible(true); 
                setIsButtonActive(true); 
            }

            setCashVisible(false)
            setPaypalVisible(false)
        }

        if (value === "cash") {
            if (cashVisible === true) { 
                setCashVisible(false); 
                setIsButtonActive(false); 
            }
            else { 
                setCashVisible(true); 
                setIsButtonActive(true); 
            }

            setCardVisible(false)
            setPaypalVisible(false)
        }

        if (value === "paypal") {
            if (paypalVisible === true) { 
                setPaypalVisible(false); 
                setIsButtonActive(false); 
            }
            else { 
                setPaypalVisible(true); 
                setIsButtonActive(true); 
            }

            setCashVisible(false);
            setCardVisible(false);
        }

    }

    function _cardNumber(text) {
        // let textSize = text.replace(/ /g,"")

        if (text.indexOf('.') >= 0 || text.length > 19) {
            return;
        }

        if (text.length === 4 || text.length === 9 || text.length === 14) {
            text += ' '
        }

        setCardNumber(text);
    }

    function _cardExpiry(text) {
        if (text.indexOf('.') >= 0 || text.length > 5) {
            return;
        }

        // if (text.length === 2 && cardNumber.length === 1) {
        //     text += '/'
        // }
        if (text.length === 2) {
            text += '/'
        }
        setCardExpiry(text);
    }

    function _cardCVC(text) {
        if (text.indexOf('.') >= 0 || text.length > 3) {
            return;
        }

        setCardCVC(text);
    }

    function buttonControl(){
        if( cardNumber === "" || cardExpiry === "" || cardCVC === "" || nameOnCard === "")
        {
            Alert.alert("","Check Card Information")
        }
        else{
            Alert.alert("","Payment completed")
        }
        
    }
    return (
        <ScrollView style={styles.container}>
            <Header />
            <Line />

            <View style={styles.titleView}>
                <View style={styles.addressView}>
                    <View style={{ flexDirection: 'row' }}>
                        <IconNumber
                            name='numeric-1-circle-outline'
                            size={25}
                            color="#7c7b7b"
                        />
                        <Text style={styles.addressTitleText}>Shipping Address</Text>
                    </View>

                    <Text style={styles.addressText}>Karput mahallesi...</Text>
                    <Text style={styles.addressText}>şişli ist...</Text>

                </View>

                <View style={{ borderLeftWidth: 1, borderLeftColor: '#cccccc' }}></View>

                <View style={styles.addressView}>
                    <View style={{ flexDirection: 'row' }}>
                        <IconNumber
                            name='numeric-2-circle'
                            size={25}
                            color="#000"
                        />
                        <Text style={styles.checkoutTitleText}>Checkout</Text>
                    </View>

                    <Text style={styles.checkoutText}>Credit/Debit Card, pay on delivery or Paypal</Text>


                </View>
            </View>

            {/* Credit Card View */}
            <View style={styles.creditCartView}>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity
                            onPress={() => { cardFunc("card") }}
                            style={{ flexDirection: 'row' }}>
                            <View style={styles.activeIconView}>
                                <View style={cardVisible ? { width: 15, height: 15, borderRadius: 13, backgroundColor: '#000' }
                                    : { width: 15, height: 15, borderRadius: 13, backgroundColor: '#fff' }}></View>
                            </View>

                            <View style={{ paddingLeft: 5 }}>
                                <Text style={styles.cardTitleText}>Credit/Debit Card Payment</Text>
                                <Text>(We accept Visa or Mastercard)</Text>
                            </View>
                        </TouchableOpacity>

                        <Image
                            source={require('../../image/visa-mastercard.png')}
                            style={styles.cardImage}
                        />
                    </View>

                    {cardVisible ? <View>
                        <View style={styles.cardInfoView}>
                            <FontAwesome
                                name='credit-card-alt'
                                size={25}
                                color="#c4c4c4"
                            />

                            <TextInput
                                onChangeText={_cardNumber.bind(this)}
                                placeholder='0000 0000 0000 0000'
                                keyboardType={'numeric'}
                                value={cardNumber}
                            />

                            <TextInput
                                onChangeText={_cardExpiry.bind(this)}
                                placeholder='MM/YY'
                                keyboardType={'numeric'}
                                value={cardExpiry}
                            />

                            <TextInput
                                onChangeText={_cardCVC.bind(this)}
                                placeholder='CVC'
                                keyboardType={'numeric'}
                                value={cardCVC}
                            />
                        </View>

                        <View>
                            <TextInput
                                placeholder='Name on Card*'
                                style={styles.nameTextInput}
                                onChangeText={(value) => {setNameOnCard(value)}}
                            />

                        </View>
                    </View> : null}


                </View>
            </View>

            <Line />

            {/* Cash View */}
            <View style={styles.cashView}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity
                        onPress={() => { cardFunc("cash") }}
                        style={{ flexDirection: 'row' }}>
                        <View style={styles.activeIconView}>
                            <View style={cashVisible ? { width: 15, height: 15, borderRadius: 13, backgroundColor: '#000' }
                                : { width: 15, height: 15, borderRadius: 13, backgroundColor: '#fff' }}></View>
                        </View>

                        <View style={{ paddingLeft: 5 }}>
                            <Text style={styles.cardTitleText}>Cash on Delivery</Text>
                            <Text>The additional fees for this services is</Text>
                        </View>
                    </TouchableOpacity>

                    <Image
                        source={require('../../image/cash.png')}
                        style={styles.cashImage}
                    />
                </View>
            </View>

            <Line />

            {/* Paypal View */}
            <View style={styles.paypalView}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity
                        onPress={() => { cardFunc("paypal") }}
                        style={{ flexDirection: 'row', flex: 1 }}>
                        <View style={styles.activeIconView}>
                            <View style={paypalVisible ? { width: 15, height: 15, borderRadius: 13, backgroundColor: '#000' }
                                : { width: 15, height: 15, borderRadius: 13, backgroundColor: '#fff' }}></View>
                        </View>

                        <View style={{ paddingLeft: 5 }}>
                            <Text style={styles.cardTitleText}>Paypal</Text>
                            <Text>Paypal will charge you in USD</Text>
                            <Text>Total may differ slighty due to currency conversion</Text>
                        </View>
                    </TouchableOpacity>

                    <Image
                        source={require('../../image/paypal.png')}
                        style={styles.paypalImage}
                    />
                </View>

                {paypalVisible ? <View>
                    <View style={styles.cardInfoView}>
                        <FontAwesome
                            name='credit-card-alt'
                            size={25}
                            color="#c4c4c4"
                        />

                        <TextInput
                            onChangeText={_cardNumber.bind(this)}
                            placeholder='0000 0000 0000 0000'
                            keyboardType={'numeric'}
                            value={cardNumber}
                        />

                        <TextInput
                            onChangeText={_cardExpiry.bind(this)}
                            placeholder='MM/YY'
                            keyboardType={'numeric'}
                            value={cardExpiry}
                        />

                        <TextInput
                            onChangeText={_cardCVC.bind(this)}
                            placeholder='CVC'
                            keyboardType={'numeric'}
                            value={cardCVC}
                        />
                    </View>

                    <View>
                        <TextInput
                            placeholder='Name on Card*'
                            style={styles.nameTextInput}
                            onChangeText={(value) => {setNameOnCard(value)}}
                        />

                    </View>
                </View> : null}
            </View>

            <Line />

            {/* Price View */}
            <View style={styles.priceView}>
                <View style={styles.priceListView}>
                    <Text style={styles.priceText}>Subtotal</Text>
                    <Text style={styles.priceText}>800 AED</Text>
                </View>
                <View style={styles.priceListView}>
                    <Text style={styles.priceText}>Coupon Code</Text>
                    <Text style={styles.priceText}>-50 AED</Text>
                </View>
                <View style={styles.priceListView}>
                    <Text style={styles.priceText}>Shipping</Text>
                    <Text style={styles.priceText}>Free</Text>
                </View>
            </View>

            <Line />

            <View style={styles.totalView}>
                <Text style={styles.totalText}>Total</Text>
                <Text style={styles.totalText}>750 AED</Text>
            </View>

            <TouchableOpacity 
                style={isButtonActive ? styles.buttonActive : styles.buttonDeactive}
                disabled={!isButtonActive}
                onPress={buttonControl}
            >
                <Text style={styles.buttonText}>BUY NOW</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}
