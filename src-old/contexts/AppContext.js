// REACT APP src/contexts/AppContext.js - login()
const login = () => {
    axios.defaults.withCredentials = true;
    // CSRF COOKIE
    axios.get(hostName + "sanctum/csrf-cookie").then(
        (response) => {
        axios.post(hostName + "api/login", {
            email: userEmail,
            password: userPassword,
        });

// REACT APP src/contexts/AppContext.js - signup()
const signup = () => {
    axios.defaults.withCredentials = true;
    // CSRF COOKIE
    axios.get(hostName + "sanctum/csrf-cookie").then(
      (response) => {
        //console.log(response);
        // SIGNUP / REGISTER
        axios
          .post(hostName + "api/register", {
            name: userNameInput,
            email: userEmail,
            password: userPassword,
          })
          .then(
            (response) => {
              //console.log(response);
              // GET USER
              axios.get(hostName + "api/user").then(
                (response) => {
                  //console.log(response);
                  setUserId(response.data.id)
                  setUserName(response.data.name)
                  setErrorMessage("")
                  setAuthStatus(LOGGED_IN)
                },
                // GET USER ERROR
                (error) => {
                  setErrorMessage("Could not complete the sign up")
                }
              )
            },
            // SIGNUP ERROR
            (error) => {
              if (error.response.data.errors.name) {
                setErrorMessage(error.response.data.errors.name[0])
              } else if (error.response.data.errors.email) {
                setErrorMessage(error.response.data.errors.email[0])
              } else if (error.response.data.errors.password) {
                setErrorMessage(error.response.data.errors.password[0])
              } else if (error.response.data.message) {
                setErrorMessage(error.response.data.message)
              } else {
                setErrorMessage("Could not complete the sign up")
              }
            }
          )
      },
      // COOKIE ERROR
      (error) => {
        setErrorMessage("Could not complete the sign up")
      }
    )
  }

function logout() {
    axios.defaults.withCredentials = true
    axios.get(hostName + "api/logout")
    setUserId(0)
    setUserName("")
    setUserNameInput("")
    setUserEmail("")
    setUserPassword("")
    setAuthStatus(NOT_LOGGED_IN)
  }