import { Typography, Grid, Button } from '@mui/material'
import React from 'react'
import Header from '../components/Header'
import about from '../images/about.jpg'
import Footer from '../components/Footer'

export default function About() {
  return (

    <div>
      <Header />
      <div>
        <Grid container spacing={0}>
          <Grid item xs={12} md={6} style={{
            backgroundColor: "#ec0000",
            color: "white",
            minHeight: "70vh"
          }}>
            <div style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              widht: "100%",
              alignItem: "center",
              justifyContent: "center"
            }}>
              <Typography variant="h3" style={{
                margin: "auto 3vw",
                fontWeight: "normal"
              }}>
                Poznaj <strong>Nova</strong> bliżej.
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} md={6} style={{
            minHeight: "70vh"
          }}>
            <div style={{
              backgroundImage: `url(${about})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: "100%",
              widht: "100%"

            }}>
            </div>
          </Grid>
        </Grid>
        <div style={{
          margin: "8vh 2vw"
        }}>
          <Typography variant="body1" style={{
            textAlign: "justify",
            textJustify: "inter-word"
          }}>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis erat nec congue lobortis. Nunc pretium interdum velit dapibus sodales. Nullam molestie efficitur ultrices. Donec mattis vel massa non auctor. Sed vulputate dictum orci at posuere. Integer vel tempus mi. Mauris mollis aliquam arcu eu fermentum. Quisque elementum laoreet varius. Mauris at ex enim. Nulla a mi scelerisque, finibus risus ac, ultricies magna.

            Vestibulum id lectus nunc. Quisque porttitor sodales nibh, at eleifend turpis ornare et. Nullam viverra maximus efficitur. Phasellus efficitur pharetra nisl, nec molestie augue ornare vitae. Suspendisse potenti. Duis condimentum lobortis quam eget bibendum. Aliquam malesuada leo non tellus tincidunt auctor at non neque. Integer lectus sem, ultricies eu nisi vitae, tempor placerat libero. Sed aliquet, lectus ac scelerisque volutpat, nisl urna pretium libero, quis condimentum magna nibh at purus. Praesent ipsum lacus, tincidunt vulputate blandit id, posuere non urna. Suspendisse sed tortor hendrerit, consequat massa non, laoreet mauris. In et tortor eu tellus viverra sodales eu ac ex. Morbi finibus quam vitae tempor interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum erat nisl, sagittis vel consectetur at, interdum vestibulum massa.

            Cras sed velit vitae felis euismod pellentesque. Phasellus non diam condimentum, vulputate augue laoreet, gravida quam. Etiam pharetra mi tortor, quis condimentum libero laoreet sit amet. Proin dolor felis, molestie eget nulla a, gravida dictum sem. Donec ut ex vitae nisi pulvinar vestibulum ut a nulla. Nullam sollicitudin dictum felis aliquam placerat. Morbi fringilla dictum est, nec finibus diam condimentum vel. Vestibulum nec ornare mi. Quisque ex sem, finibus viverra tortor in, pharetra dictum arcu. Donec eu ligula at mi dictum elementum. Duis lacus orci, iaculis id elementum sed, hendrerit eget mauris. Proin semper imperdiet sollicitudin. Nam at nisl et mi posuere ultrices. Sed varius, dolor id mollis malesuada, lorem orci ultrices justo, id faucibus neque ligula sit amet leo. Integer mollis gravida accumsan.

            Aliquam molestie faucibus arcu mattis laoreet. Nulla imperdiet aliquam malesuada. Vestibulum blandit quis urna et molestie. Nunc tempus eu orci id luctus. Suspendisse eu velit felis. Duis nisl velit, venenatis a tortor id, rhoncus bibendum tellus. In molestie felis vitae nisi posuere iaculis.

            Donec varius mattis enim in sagittis. Mauris hendrerit dolor ut mi pellentesque, nec porttitor justo varius. Donec ullamcorper erat vestibulum porttitor scelerisque. Aliquam odio mi, lobortis et fringilla in, molestie ac orci. Sed congue, augue et ultricies faucibus, ex libero feugiat nisl, ut accumsan enim orci sed nisi. Nulla eu feugiat orci, vitae pretium mauris. Phasellus et diam in ipsum faucibus ornare. In hac habitasse platea dictumst. Donec congue orci purus, vitae imperdiet sem consequat pretium. Pellentesque consequat magna nec sagittis egestas. Nulla porttitor molestie massa, in bibendum diam tincidunt in. Nam sodales augue ut est elementum faucibus.
          </Typography>
        </div>
      </div>
      <Footer />
    </div>
  )
}
