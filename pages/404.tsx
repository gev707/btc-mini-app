import Link from "next/link"

const ErrorPage = () => {
    return (
        <div className="error-container">
            <div>
                <h1>Page not Found</h1>
                <div>
                    <Link href="/">
                        <a className="redirect">Back to home page </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default ErrorPage