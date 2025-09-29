

function Profile({ userLogin }) {
    return (
        <section>
            <img src={userLogin.image} alt="" />
            <div>
                <h2>
                    {userLogin.firstName} {userLogin.lastName}
                </h2>
                <p> {userLogin.gender}</p>
            </div>
        </section>
    )
}

export default Profile