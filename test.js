"use latest";
import Mailgun from 'mailgun-js'
import {mjml2html} from 'mjml'

const createMessage = (handle) => {
  return mjml2html(`
    <mjml>
      <mj-body>
        <mj-container>
          <mj-section>
            <mj-column>
              <mj-text>
                You have a new friend request from ${handle}
              </mj-text>
            </mj-column>
          </mj-section>
        </mj-container>
      </mj-body>
    </mjml>
  `)
}

const test = (ctx, done) => {
  const domain = 'sandboxebfadedf15494984b8b9cd072d2bd594.mailgun.org'
  const {apiKey} = ctx.data
  const mailgun = new Mailgun({apiKey, domain})

  let {actor, recipient} = data.body.createdNode
  
  
  mailgun.messages().send({
     from: "cpeaslee@gmail.com",
     to: recipient.email,
     html: createMessage(actor.handle),
     subject: "New Friend Request"
   }, (error, body) => {
    console.log('error body', error, body)
  })
  
 
}

export default test