import { Button, Select, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PostCard from "../../components/Shared/PostCard";
const SearchPage = () => {
  const [sidebarData, setSidebarData] = useState({
    searchTerm: "",
    sort: "desc",
    category: "uncategorized",
  });

  console.log(sidebarData);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    const sortFromUrl = urlParams.get("sort");
    const categoryFromUrl = urlParams.get("category");
    if (searchTermFromUrl || sortFromUrl || categoryFromUrl) {
      setSidebarData({
        ...sidebarData,
        searchTerm: searchTermFromUrl,
        sort: sortFromUrl,
        category: categoryFromUrl,
      });
    }

    const fetchPosts = async () => {
      setLoading(true);
      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/post/getposts?${searchQuery}`);
      if (!res.ok) {
        setLoading(false);
        return;
      }
      if (res.ok) {
        const data = await res.json();
        setPosts(data.posts);
        setLoading(false);
        if (data.posts.length === 9) {
          setShowMore(true);
        } else {
          setShowMore(false);
        }
      }
    };
    fetchPosts();
  }, [location.search]);

  const handleChange = (e) => {
    if (e.target.id === "searchTerm") {
      setSidebarData({ ...sidebarData, searchTerm: e.target.value });
    }
    if (e.target.id === "sort") {
      const order = e.target.value || "desc";
      setSidebarData({ ...sidebarData, sort: order });
    }
    if (e.target.id === "category") {
      const category = e.target.value || "uncategorized";
      setSidebarData({ ...sidebarData, category });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", sidebarData.searchTerm);
    urlParams.set("sort", sidebarData.sort);
    urlParams.set("category", sidebarData.category);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };
  const handleShowMore = async () => {
    const numberOfPosts = posts.length;
    const startIndex = numberOfPosts;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("startIndex", startIndex);
    const searchQuery = urlParams.toString();
    const res = await fetch(`/api/post/getposts?${searchQuery}`);
    if (!res.ok) {
      return;
    }
    if (res.ok) {
      const data = await res.json();
      setPosts([...posts, ...data.posts]);
      if (data.posts.length === 9) {
        setShowMore(true);
      } else {
        setShowMore(false);
      }
    }
  };

  return (
    <div className="min-h-screen pt-16 flex flex-col md:flex-row">
      <div className="p-7 border-b md:border-r md:min-h-screen border-gray-500">
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <div className="flex justify-between items-center  gap-2">
            <label className="whitespace-nowrap font-semibold">
              Search Term :
            </label>
            <TextInput
              placeholder="Search ...."
              id="searchTerm"
              type="text"
              value={sidebarData.searchTerm}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between items-center  gap-2">
            <label className="whitespace-nowrap font-semibold ">Sort :</label>
            <Select
              placeholder="Search ...."
              id="sort"
              type="text"
              value={sidebarData.sort}
              onChange={handleChange}
              className=""
            >
              <option value="desc">Latest</option>
              <option value="asc">Old</option>
            </Select>
          </div>
          <div className="flex justify-between items-center  gap-2">
            <label className="whitespace-nowrap font-semibold ">
              Category :
            </label>
            <Select
              placeholder="Search ...."
              id="category"
              type="text"
              value={sidebarData.category}
              onChange={handleChange}
              className=""
            >
              <option value="uncategorized">Uncategorized</option>
              <option value="node">NodeJS</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="c++">C++</option>
              <option value="c#">C#</option>
              <option value="php">PHP</option>
              <option value="sql">SQL</option>
            </Select>
          </div>
          <Button type="submit" outline>
            Apply Filter
          </Button>
        </form>
      </div>
      <div className="w-full ">
        <h1 className="text-3xl font-semibold sm:border-b border-gray-500 p-3 mt-5">
          Posts result :
        </h1>
        <div className="p-7 flex justify-center flex-wrap gap-4 ">
          {!loading && posts.length === 0 && (
            <p className="text-xl text-gray-500 ">No Post Found</p>
          )}
          {loading && <p className="text-xl text-gray-500 ">Loading...</p>}
          {!loading &&
            posts &&
            posts.map((post) => (
              <PostCard key={post._id} post={post}></PostCard>
            ))}
          {showMore && <Button onClick={handleShowMore}>Show More</Button>}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
