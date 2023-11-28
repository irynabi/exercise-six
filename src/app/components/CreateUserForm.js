import styles from "./components.module.css"

const CreateUserForm= () => {
    return (
        <div>
            <h2>User Form</h2>
            <form className={styles.CreateUserForm}> 
                <label htmlFor="name"> Name </label>
                <input type="text" name="name"/>

                <label htmlFor="email"> Email </label>
                <input type="email" name="email"/>

                <label htmlFor="password"> Password</label>
                <input type="password" name="password"/>
            
                <button type="submit"> Create User </button>
            </form>
        </div>
    )
}

export default CreateUserForm;