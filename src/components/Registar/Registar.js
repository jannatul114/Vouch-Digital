import React, { useEffect } from 'react';
import Loading from '../Loading/Loading';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Registar = () => {
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    if (user || gUser) {
        navigate('/welldone')
        toast.success('Successfully login')
    }

    if (loading || gLoading) {
        <Loading />
    }

    useEffect(() => {
        if (error || gError) {
            toast.error(error?.message || gError?.message);
        }
    }, [error, gError])
    const handleUser = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 col-sm-12 col-md-12 col-12'>
                    <div className='d-flex align-items-center h-100'>
                        <div className='w-75 mx-auto mt-5 '>
                            <h1 className='text-center welcome my-4'>Welcome Back</h1>

                            <h2 className='text-center welcome'>Registar</h2>
                            <div>
                                <form onSubmit={handleUser}>
                                    <div class="mb-3">
                                        <input name='email' type="email" class="form-control" placeholder="Eamil*" required />
                                    </div>
                                    <div class="mb-3">
                                        <input name='password' type="password" class="form-control" placeholder="password*" required />
                                    </div>
                                    <div class="mb-3">
                                        <input type="submit" class="form-control submit-btn text-white" placeholder="name@example.com" value={'Submit'} />
                                    </div>

                                </form>
                                <div className='my-4'>
                                    <p className='text-center'>Already have any Account? <Link to={'/home'}>Login</Link></p>
                                </div>
                                <div class="mb-3">
                                    <button onClick={() => signInWithGoogle()
                                    } className='btn w-100 d-flex my-3 justify-content-center border pt-2 w-100 px-3 border-primary'>
                                        <img height={'30px'} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png?20210618182606" alt="" />

                                        <p className='ms-3 mt-1'>Sign in with Google</p>

                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-sm-12 col-md-12 col-12 none'>
                    <div className='d-flex justify-content-center'>
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-page-4468581-3783954.png" className='w-100 h-100' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registar;