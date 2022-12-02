import React from 'react'
import '../css/SearchStyles.css'

function Search() {
  return (
    <div  name='book' className='search'>
        <div className='container'>
            <div className='left'>
            <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
                    <p>Come experience the very pinnacle of luxury Caribbean all-inclusive vacations for couples at Sandals Resorts. Our luxury beach resorts, set along the most gorgeous tropical settings and exquisite beaches in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and Curaçao, feature unlimited gourmet dining, unique bars serving premium liquors and wines, and every land and water sport, including complimentary green fees at our golf resorts and PADI® certified scuba diving at most resorts. If you are planning a wedding, Sandals is the leader in Caribbean destination weddings and honeymoon packages.
                    </p>
                    <div>
                    <button> View Packages</button>
                    </div>
            </div>
           
            <div className='right'>
                <form>
                    <div className=' input-wrap' >
                      <label>Destination</label>
                      <select name='destination' id='destination' required >
                             <option value="1">Grande Antigua</option>
                             <option value="2">Grenda</option>
                             <option value="3">Emerald Bay</option>
                             <option value="4">Bora Bora</option>
                             <option value="5">Key West</option>
                             <option value="6">Maldives</option>
                             <option value="7">Barbados</option>                             
                      </select>
                    </div>
                    <div className='date'>
                          <div className='input-wrap'>
                          <label>Check-In </label>
                          <input type='date'/>
                             </div> 
                            <div className='input-wrap'>
                            <label>Check-Out</label>
                            <input type='date'/>
                               </div> 
                      </div>
                </form>
                <button>Rates And Availability</button>
            </div>

        </div>
    </div>
  )
}

export default Search