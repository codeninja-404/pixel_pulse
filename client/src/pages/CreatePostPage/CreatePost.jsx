import { Button, FileInput, Select, TextInput } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatePost = () => {
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
          <FileInput type="file" accept="image/*" />
          <Button type="button" color="primary" size="sm" outline>
            Upload image
          </Button>
        </div>
        <ReactQuill
          theme="snow"
          placeholder="write something..."
          className="h-72 mb-12 dark:text-white"
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
