export const menu = [
    {
      icon: 'bx bx-home',
      title: 'Dashboard', 
      list: [
        {name: 'Main page', url: '/admin/main'},
        {name: 'Crypto', url: '/admin/crypto'},
        {name: 'Blog', url: '/admin/blog'},
        {name: 'Tasks', url: '/admin/task'}
      ]
    },
    {
      icon: 'bx bx-store',
      title: 'Ecommerce', 
      list: [
        {name: 'Lessons', url: '/admin/lessons'},
        {name: 'Orders', url: '/admin/orders'},
        {name: 'Customers', url: '/admin/customers'},
        {name: 'Add Product', url: '/admin/add_product'},
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
      icon: 'bx bxs-user-detail',
      title: 'Contacts', 
      list: [
        {name: 'Users', url: '/admin/users'},
        {name: 'Profile', url: '/admin/profile'},
        {name: 'Create User', url: '/admin/create_user'}
      ]
    },
    {
      icon: 'bx bx-notepad',
      title: 'Blog', 
      list: [
        {name: 'Blog List', url: '/admin/blog'},
        {name: 'Blog Categories', url: '/admin/blog_category'},
        {name: 'Blog Details', url: '/admin/blog_details'},
        {name: 'Create Blog', url: '/admin/create_blog'}
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
        {name: 'Error 404', url: '/admin/not_found'},
        {name: 'Error 500', url: '/admin/internal_server_error'}
      ]
    },
    {
      icon: 'bx bx-cog',
      title: 'Settings',
      url: '/admin/settings'
    }
  ]