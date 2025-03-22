import { Helmet } from "react-helmet-async";
import AuthorsBar from "../AuthorsBar/AuthorsBar";

const Authors_Hub = () => {
  return (
    <div className="text-center gap-6 mb-10">
      <Helmet>
        <title>Author's Hub</title>
        <meta name="description" content="Learn more about us on this page" />
      </Helmet>
      {/* <p className="font-bold text-2xl">Authors page</p> */}
      <AuthorsBar></AuthorsBar>
      <div class="max-w-4xl w-10/12 mx-auto p-6 bg-white rounded-lg shadow-lg mt-28">
        <h1 class="text-3xl font-bold text-purple-700 mb-4">
          Project Overview: <span class="text-gray-900">Gadget Heaven</span>
        </h1>
        <p class="text-lg leading-relaxed mb-6">
          Welcome to <span class="font-semibold">Gadget Heaven</span>, an
          intuitive, dynamic e-commerce platform designed to provide users with
          an engaging and user-friendly shopping experience. Built with a modern
          tech stack and adhering to industry best practices, this site offers a
          streamlined browsing and purchasing experience, featuring an organized
          product catalog, a comprehensive wishlist and cart system, and an
          efficient checkout process.
        </p>

        <h2 class="text-2xl font-semibold text-purple-700 mb-3">
          Learning Points of Project Creation
        </h2>

        <ol class="space-y-4">
          <li class="bg-gray-50 p-4 rounded-lg shadow">
            <h3 class="font-semibold text-lg text-gray-800">
              1. Dynamic State Management
            </h3>
            <p>
              Implemented efficient state management to ensure smooth
              transitions for actions like adding/removing items from the cart
              and wishlist.
            </p>
          </li>

          <li class="bg-gray-50 p-4 rounded-lg shadow">
            <h3 class="font-semibold text-lg text-gray-800">
              2. Custom Hooks and Context API
            </h3>
            <p>
              Used React’s Context API for global state management, avoiding
              prop drilling and improving maintainability. Custom hooks
              encapsulated reusable logic, enhancing readability.
            </p>
          </li>

          <li class="bg-gray-50 p-4 rounded-lg shadow">
            <h3 class="font-semibold text-lg text-gray-800">
              3. Toaster Notifications
            </h3>
            <p>
              Integrated real-time toaster notifications with{" "}
              <code>react-toastify</code> for immediate feedback on actions like
              adding/removing items, enhancing user engagement.
            </p>
          </li>

          <li class="bg-gray-50 p-4 rounded-lg shadow">
            <h3 class="font-semibold text-lg text-gray-800">
              4. Responsive and Engaging UI/UX Design
            </h3>
            <p>
              Crafted a responsive layout that provides a seamless experience
              across all devices, making the site accessible and visually
              appealing on desktop and mobile alike.
            </p>
          </li>

          <li class="bg-gray-50 p-4 rounded-lg shadow">
            <h3 class="font-semibold text-lg text-gray-800">
              5. Routing and Dynamic Titles
            </h3>
            <p>
              Used <code>react-router-dom</code> for seamless multi-page
              navigation, dynamically setting page titles to improve user
              orientation and SEO.
            </p>
          </li>

          <li class="bg-gray-50 p-4 rounded-lg shadow">
            <h3 class="font-semibold text-lg text-gray-800">
              6. Sorting and Filtering Logic
            </h3>
            <p>
              Added sorting functionality to organize products by attributes,
              demonstrating data manipulation and user preference management.
            </p>
          </li>

          <li class="bg-gray-50 p-4 rounded-lg shadow">
            <h3 class="font-semibold text-lg text-gray-800">
              7. Enhanced Error Handling and User Feedback
            </h3>
            <p>
              Implemented error handling and informative messages to engage
              users and guide them through corrective actions if needed.
            </p>
          </li>

          <li class="bg-gray-50 p-4 rounded-lg shadow">
            <h3 class="font-semibold text-lg text-gray-800">
              8. Project Organization and Component Architecture
            </h3>
            <p>
              Adopted a modular approach, making the codebase easy to maintain
              and scalable for future enhancements.
            </p>
          </li>

          <li class="bg-gray-50 p-4 rounded-lg shadow">
            <h3 class="font-semibold text-lg text-gray-800">
              9. Using Third-Party Libraries for Efficiency
            </h3>
            <p>
              Used libraries like <code>react-toastify</code> for notifications
              and <code>react-helmet</code> for dynamic titles, adding polish
              while focusing on core features.
            </p>
          </li>

          <li class="bg-gray-50 p-4 rounded-lg shadow">
            <h3 class="font-semibold text-lg text-gray-800">
              10. Building a Scalable and Maintainable Codebase
            </h3>
            <p>
              Applied clean code practices and modern JavaScript best practices
              to create a scalable codebase, facilitating future improvements
              and collaborative development.
            </p>
          </li>
        </ol>

        <div class="mt-8 p-4 bg-purple-100 rounded-lg shadow">
          <p class="text-lg font-semibold text-purple-700">Conclusion</p>
          <p class="text-gray-700 mt-2">
            This project highlights essential skills in state management, UI/UX
            design, and dynamic functionality for an e-commerce platform. It
            serves as a foundation for building scalable, user-centered web
            applications, offering valuable experience for future projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Authors_Hub;
