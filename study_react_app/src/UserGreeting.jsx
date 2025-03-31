import PropTypes from 'prop-types'

function UserGreeting(props){
    const welcome_message = <h2 className="welcome_message">Welcome {props.username}</h2>

    const login_prompt = <h2 class="login_prompt">Please log in to conitnue</h2>

    return (props.isLoggedIn ? welcome_message : login_prompt)

}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

export default UserGreeting;