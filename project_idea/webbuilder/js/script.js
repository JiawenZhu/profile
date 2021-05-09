const form = document.getElementById('email-form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('Phone');
const website = document.getElementById('Website');
const message = document.getElementById('Message');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  // call fetch
  passToGoogleSheet(name.value, email.value, phone.value, website.value, message.value)
})
function passToGoogleSheet(name, email, phone, website, message) {
  let date = new Date().toUTCString();
  fetch('https://v1.nocodeapi.com/evanapi/google_sheets/kjtGdyYPTyAHpOqe?tabId=forms', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(
          [
              [
                  name,
                  email,
                  phone,
                  website,
                  message
              ],
          ]
      )
  }).then(res => {
      if (res.ok) {
          console.log('SUCCESS')
          return res.json();
      }
      else {
          console.log('NOT Successful')
      }
  }).then(data => console.log(data))
}