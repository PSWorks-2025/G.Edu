import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../services/service';
import { auth } from '../../services/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/home', { state: { userId: user.uid } });
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await signIn(email, password);
      if (response) {
        navigate('/home');
      } else {
        setError('Invalid email or password');
        setPassword('');
      }
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">G.Edu SAT Learning Platform</h1>
        <p className="text-gray-600 text-sm md:text-base">
          Global Learning, Global Strategies, Global Success
        </p>
      </div>
      <div
        style={{ backgroundColor: '#F9F9F9' }}
        className="p-6 md:p-8 rounded-lg shadow-md w-full max-w-lg mx-auto text-center"
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Login to Account</h2>
        <p className="text-gray-500 mb-4 text-sm md:text-base">Please enter your email and password to continue</p>
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-left text-gray-700 text-sm md:text-base">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-3 py-2 rounded-md border-2 mt-1 text-sm md:text-base`}
                placeholder="e.g. johndoe@hello.com"
                style={{ borderColor: error ? '#E5484D' : '#D9D9D9' }}
              />
              {error && (
                <ion-icon
                  name="alert-circle-outline"
                  style={{
                    color: 'red',
                    position: 'absolute',
                    right: '10px',
                    top: '55%',
                    transform: 'translateY(-50%)',
                    fontSize: '20px',
                  }}
                ></ion-icon>
              )}
            </div>
            {error && <p className="text-red-500 text-sm mt-1 text-left">{error}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-left text-gray-700 text-sm md:text-base">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border-2 rounded-md mt-1 text-sm md:text-base"
                placeholder="Password"
                style={{ borderColor: '#D9D9D9' }}
              />
              <div onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <ion-icon
                    name="eye-outline"
                    style={{
                      color: '#646464',
                      position: 'absolute',
                      right: '10px',
                      top: '55%',
                      transform: 'translateY(-50%)',
                      fontSize: '20px',
                    }}
                  ></ion-icon>
                ) : (
                  <ion-icon
                  name="eye-off-outline"
                  style={{
                    color: '#646464',
                    position: 'absolute',
                    right: '10px',
                    top: '55%',
                    transform: 'translateY(-50%)',
                    fontSize: '20px',
                  }}
                ></ion-icon>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <input type="checkbox" id="remember" className="mr-2" />
          <label htmlFor="remember" className="text-gray-700 text-sm md:text-base">
            Remember Password
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 text-sm md:text-base transition"
        >
          Sign In
        </button>
      </form>
    </div>
  </div>
);
}

export default Login;