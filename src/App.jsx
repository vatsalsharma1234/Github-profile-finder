import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [userdata, setuser] = useState('')
  useEffect(() => {
    console.log(userdata)
  }, [userdata]
  )

  const [val, setval] = useState('')
  async function fetchuser() {
    try {
      const response = await fetch(`https://api.github.com/users/${val}`, {
        headers: {
          "Authorization": "YOUR OWN TOKEN HERE",
          "User-Agent": "vatsalsharma1234"
        }
      })
      if (response.ok) {
        var data = await response.json()
        setuser(data); setval('')
      }
      else {
        alert('user does ont exsist')
      }
    }
    catch {
      alert(`error occured: ${error.message}`)
    }

  }

  function changing(e) {
    setval(e.target.value)
  }

  return (
    <>
      <div className='outer'>
        <div className='box'>
          <div className="navb">
            <input onKeyDown={(e) => { if (e.key == 'Enter' && val != '') { fetchuser() } }} type="text" placeholder='Enter name to search' value={val} onChange={(e) => { changing(e) }} />
            <button onClick={() => { if (val != '') fetchuser() }}>Search</button>
          </div>
          {userdata != '' ? <div className='contouter'>
            <div className='imgcont'>
              <img src={userdata.avatar_url} alt="icon" />
              <button onClick={() => window.open(userdata.html_url
                ? userdata.html_url
                : '/', "_blank")}>
                Inspect
              </button>

            </div>
            <div className='datacont'>
              <div>Name:-{userdata.name ? userdata.name : ''}</div>
              <div>{userdata.bio ? `Bio:-${userdata.bio}` : `Location:-${userdata.location ? userdata.location : 'Not entered'}`}</div>
              <div>Followers:-{userdata.followers ? userdata.followers : ''}</div>
              <div>{userdata.company ? `Company:-${userdata.company}` : `Created at:-${userdata.created_at}`}</div>
              <div>Email:-{userdata.email ? userdata.email : userdata.blog ? userdata.blog : 'undefined'}</div>
            </div>
          </div> : ''}
        </div>
      </div>
    </>
  )
}

export default App
