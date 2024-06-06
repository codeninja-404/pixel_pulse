import { Alert, Button, FileInput, Select, TextInput } from "flowbite-react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  getStorage,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../../firebase";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const CreatePost = () => {
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({});
  const handleUploadImage = async () => {
    try {
      if (!file) {
        setImageUploadError("Please select an image file");
        return;
      }
      setImageUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + "-" + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setImageUploadError(error);
          setImageUploadProgress(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUploadProgress(null);
            setImageUploadError(null);
            setFormData({ ...formData, image: downloadURL });
          });
        },
      );
    } catch (error) {
      setImageUploadError("Failed to upload image: " + error.message);
      setImageUploadProgress(null);
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen pt-20 md:pt-32 pb-10 max-w-3xl mx-auto px-2">
      <h1 className="text-center text-3xl my-7 font-semibold">Create a post</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            placeholder="Title"
            type="text"
            required
            id="title"
            className="flex-1"
          />
          <Select>
            <option value="uncategorized">Select a category</option>
            <option value="javascript">Javascript</option>
            <option value="react">ReactJS</option>
            <option value="angular">AngularJS</option>
            <option value="vue">VueJS</option>
            <option value="node">NodeJS</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="c++">C++</option>
            <option value="c#">C#</option>
            <option value="php">PHP</option>
            <option value="sql">SQL</option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3 rounded-lg">
          <FileInput
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Button
            type="button"
            color="primary"
            size="sm"
            outline
            onClick={handleUploadImage}
            disabled={imageUploadProgress}
          >
            {imageUploadProgress ? (
              <div className="w-10 h-10">
                <CircularProgressbar
                  value={imageUploadProgress}
                  text={`${imageUploadProgress || 0}%`}
                />
              </div>
            ) : (
              "Upload Image"
            )}
          </Button>
        </div>
        {imageUploadError && <Alert color="failure"> {imageUploadError}</Alert>}
        {formData.image && (
          <img
            src={formData.image}
            alt=""
            className="w-2/4 mx-auto  object-cover rounded-lg"
          />
        )}
        <ReactQuill
          theme="snow"
          placeholder="write something..."
          className="h-72 mb-12 "
          required
        />
        <Button type="submit" gradientDuoTone="purpleToPink">
          Publish
        </Button>
      </form>
    </div>
  );
};

export default CreatePost;
