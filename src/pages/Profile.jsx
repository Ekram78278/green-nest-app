import { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { toast } from 'react-toastify';

const Profile = () => {
  const { user, setUser, loading, setLoading } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');

//   console.log('User:', user);
//   console.log('Photo URL:', user?.photoURL);

  const handleUpdate = (e) => {
    e.preventDefault();
    setLoading(true);

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL
    })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photoURL });
        toast.success('Profile updated successfully!');
        setIsEditing(false);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Update error:', error);
        toast.error(error.message);
        setLoading(false);
      });
  };

  if (loading && !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-green-700"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
        
        <h1 className="text-3xl font-bold text-center mb-8">My Profile</h1>

        
        <div className="flex justify-center mb-6">
          <img
            src={user?.photoURL || 'https://ui-avatars.com/api/?name=User&size=200&background=16a34a&color=fff'}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-green-500 object-cover"
            referrerPolicy="no-referrer"  
            crossOrigin="anonymous"  
            onError={(e) => {
              console.log('Image failed to load, using fallback');
              e.target.onerror = null;
              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.displayName || 'User')}&size=200&background=16a34a&color=fff`;
            }}
          />
        </div>

        {!isEditing ? (

          <div className="space-y-4">
            <div className="border-b pb-4">
              <p className="text-sm text-gray-500">Name</p>
              <p className="text-xl font-semibold">{user?.displayName || 'Not set'}</p>
            </div>

            <div className="border-b pb-4">
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-xl font-semibold">{user?.email}</p>
            </div>

            <button
              onClick={() => setIsEditing(true)}
              className="w-full btn bg-green-700 text-white hover:bg-green-800 mt-6"
            >
              Update Profile
            </button>
          </div>
        ) : (
         
          <form onSubmit={handleUpdate} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Photo URL</label>
              <input
                type="url"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="input input-bordered w-full"
                placeholder="https://example.com/photo.jpg"
              />
              <p className="text-xs text-gray-500 mt-1">
                Leave blank to use generated avatar
              </p>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                value={user?.email}
                disabled
                className="input input-bordered w-full bg-gray-100"
              />
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => {
                  setIsEditing(false);
                  setName(user?.displayName || '');
                  setPhotoURL(user?.photoURL || '');
                }}
                className="flex-1 btn btn-outline"
                disabled={loading}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 btn bg-green-700 text-white hover:bg-green-800"
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-spinner loading-sm"></span>
                ) : (
                  'Save'
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;