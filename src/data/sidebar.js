export const menu = [
    {
      icon: 'bx bx-home',
      title: 'Dashboard', 
      list: [
        {name: 'Main page', url: '/admin'},
        {name: 'Blog', url: '/admin/blog'},
        {name: 'Tasks', url: '/admin/task'}
      ]
    },
    {
      icon: 'bx bx-shield-quarter',
      title: 'Admins', 
      list: [
        {name: 'All admins', url: '/admin/all'},
        {name: 'Profile admin', url: '/admin/admin-profile'},
        {name: 'Create Admin', url: '/admin/create_admin'}
      ]
    },
    {
      icon: 'bx bx-file',
      title: 'Courses', 
      list: [
        {name: 'List View', url: '/admin/courses/list'},
        {name: 'Grid View', url: '/admin/courses/grid'},
        {name: 'Category', url: '/admin/courses/caregory'},
        {name: 'Course Details', url: '/admin/courses/overview'},
        {name: 'Create Course', url: '/admin/courses/create'},
      ]
    },
    {
      icon: 'bx bx-task',
      title: 'Tasks', 
      list: [
        {name: 'Task List', url: '/admin/task_list'},
        {name: 'Create Task', url: '/admin/create_task'},
      ]
    },
    {
      icon: 'bx bxs-graduation',
      title: 'Instructors', 
      list: [
        {name: 'List View', url: '/admin/instructor/list'},
        {name: 'Grid View', url: '/admin/instructor/grid'},
        {name: 'Instructor Details', url: '/admin/instructor/overview'},
        {name: 'Create Course', url: '/admin/instructor/create'},
      ]
    },
    {
      icon: 'bx bxs-user-detail',
      title: 'Customers', 
      list: [
        {name: 'Users', url: '/admin/users'},
        {name: 'Profile', url: '/admin/profile'},
        {name: 'Create User', url: '/admin/create_user'}
      ]
    },
    {
      icon: 'bx bx-group',
      title: 'Groups', 
      list: [
        {name: 'List View', url: '/admin/groups/list'},
        {name: 'Grid View', url: '/admin/groups/grid'},
        {name: 'Group Deatils', url: '/admin/groups/details'},
        {name: 'Create Group', url: '/admin/groups/create'}
      ]
    },
    {
      icon: 'bx bx-book-open',
      title: 'Articles', 
      list: [
        {name: 'All Articles', url: '/admin/articles/all'},
        {name: 'Category', url: '/admin/articles/caregory'},
        {name: 'Article Details', url: '/admin/articles/overview'},
        {name: 'Create Articles', url: '/admin/articles/create'},
      ]
    },
    {
      icon: 'bx bx-user-circle',
      title: 'Authentication', 
      list: [
        {name: 'Login', url: '/admin/login'},
        {name: 'Register', url: '/admin/register'},
        {name: 'Reset Password', url: '/admin/reset_password'},
        {name: 'Email Verification', url: '/admin/email_verification'},
        {name: 'Two Step Verification', url: '/admin/two_verivication'}
      ]
    },
    {
      icon: 'bx bx-file',
      title: 'Utility', 
      list: [
        {name: 'FAQs', url: '/admin/faq'},
        {name: 'Pricing', url: '/admin/pricing'},
        {name: 'Privacy Policy', url: '/admin/privacy'},
        {name: 'Error 404', url: '/admin/not_found'},
        {name: 'Error 500', url: '/admin/internal_server_error'},
        {name: 'Offline Page', url: '/admin/offline'}
      ]
    },
    {
      icon: 'bx bx-cog',
      title: 'Settings',
      url: '/admin/settings'
    }
  ]