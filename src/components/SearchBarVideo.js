import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import axios from "axios"



export const SearchBarVideo = (props) => {
  const [Search, setSearch] = useState("");
  const [isLoading, setLoading] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    if(!isLoading){
      setLoading(true)
    }

    fetchData(Search)
  };

  const fetchData =  (search)=>{
    console.log(Search)

    axios.get(`https://servernasian.herokuapp.com/api/videos/?q=${Search}`)
    .then((response)=>{
     setLoading(false);
     props.getData(response.data)
    })
    .catch((err)=>{
     setLoading(false);
     console.log(`there is an error ${err}`)
    })
 

  
  }

  return (
    <div className="VideoParent">
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    {"NASAIAN"}
                    <br />
                    <span>
                      The internet’s source of Video. Powered by NASAIAN
                      everywhere
                    </span>
                  </h1>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="What you want to Saerch ..."
                        value={Search}
                        onChange={(e) => setSearch(e.target.value)}
                        required
                      />
                    </Form.Group>

                    <Button variant="primary" type="submit"
                    disabled={isLoading}
                    
                    >

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="11"
                        fill="currentColor"
                        class="bi bi-search-heart"
                        viewBox="0 0 16 16"
                        >
                        <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z" />
                        <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" />
                      </svg>{" "}
                      
                        {isLoading ? 'Searching…' : 'Search'} {" "}
                      
                    </Button>

                  </Form>

                  <div className="container-tobics">
                    <labe className="suggested">Suggested Search : </labe>
                    <div className="tobics"> Sun</div>
                    <div className="tobics">Moon</div>
                    <div className="tobics">Luna</div>

                    <br /> <br />
                    <div className="tobics">Venus</div>
                    <div className="tobics">Jupiter</div>
                    <div className="tobics">Saturn</div>
                    <div className="tobics">Neptune</div>
                    <br /> <br />
                    <div className="tobics">Celeste</div>
                    <div className="tobics">James Webb</div>
                    <div className="tobics">Orion </div>
                    <div className="tobics">Aurora</div>
                    <div className="tobics">Orion </div>
                    
                    <br />
                    <br />
                    <div className="tobics">Scorpius</div>
                    <div className="tobics">Crux</div>
                    <div className="tobics">Aurora</div>
                    <div className="tobics">Andromeda</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
