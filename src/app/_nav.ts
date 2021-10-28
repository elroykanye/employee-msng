import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'Main'
  },
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    // badge: {
    //   variant: 'info',
    //   text: 'NEW'
    // }
    children: [
      {
        name: 'Admin Dashboard',
        url: '/dashboard/admin'
      },
      {
        name: 'Employee Dashboard',
        url: '/dashboard/employee'
      },
    ]
  },
  {
    name: 'App',
    url: '/app',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Axxentis Mail',
        url: '/app/email'
      },
      {
        name: 'Contacts',
        url: '/app/contact'
      },
      {
        name: 'File manager',
        url: '/app/fileManager'
      },
      {
        name: 'Calendar',
        url: '/app/calendar'
      },
    ]
  },
  {
    title: true,
    name: 'Employees'
  },
  {
    name: 'Employees',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'All Employees',
        url: 'base/employee',
        icon: 'icon-people'
      },
      {
        name: 'Department',
        url: 'base/department',
        icon: 'icon-puzzle'
      },
      {
        name: 'City',
        url: 'base/city',
        icon: 'icon-puzzle'
      },
      {
        name: 'Country',
        url: 'base/country',
        icon: 'icon-puzzle'
      },
      {
        name: 'Resumes',
        url: 'base/resumes',
        icon: 'icon-puzzle'
      },
      {
        name: 'Images',
        url: 'base/images',
        icon: 'icon-puzzle'
      },
      {
        name: 'Cards',
        url: '/base/cards',
        icon: 'icon-puzzle'
      },
      {
        name: 'Carousels',
        url: '/base/carousels',
        icon: 'icon-puzzle'
      },
      {
        name: 'Collapses',
        url: '/base/collapses',
        icon: 'icon-puzzle'
      },
      {
        name: 'Forms',
        url: '/base/forms',
        icon: 'icon-puzzle'
      },
      {
        name: 'Navbars',
        url: '/base/navbars',
        icon: 'icon-puzzle'

      },
      {
        name: 'Pagination',
        url: '/base/paginations',
        icon: 'icon-puzzle'
      },
      {
        name: 'Popovers',
        url: '/base/popovers',
        icon: 'icon-puzzle'
      },
      {
        name: 'Progress',
        url: '/base/progress',
        icon: 'icon-puzzle'
      },
      {
        name: 'Switches',
        url: '/base/switches',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tables',
        url: '/base/tables',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tabs',
        url: '/base/tabs',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tooltips',
        url: '/base/tooltips',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Activities',
    url: '/activities',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Projects',
        url: 'activities/projects',
        icon: 'icon-loop'
      },
      {
        name: 'Tasks',
        url: '/activities/tasks',
        icon: 'icon-loop'
      },
      {
        name: 'Schedules',
        url: '/activities/schedules',
        icon: 'icon-loop'
      },
    ]
  },
  {
    name: 'Employee Profiles',
    url: '/employeeProfiles',
    icon: 'icon-cursor'
  },
  {
    name: 'Buttons',
    url: '/buttons',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Buttons',
        url: '/buttons/buttons',
        icon: 'icon-cursor'
      },
      {
        name: 'Dropdowns',
        url: '/buttons/dropdowns',
        icon: 'icon-cursor'
      },
      {
        name: 'Brand Buttons',
        url: '/buttons/brand-buttons',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    name: 'Charts',
    url: '/charts',
    icon: 'icon-pie-chart'
  },
  {
    name: 'Icons',
    url: '/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'CoreUI Icons',
        url: '/icons/coreui-icons',
        icon: 'icon-star',
      },
      {
        name: 'Flags',
        url: '/icons/flags',
        icon: 'icon-star'
      },
      {
        name: 'Font Awesome',
        url: '/icons/font-awesome',
        icon: 'icon-star',
        badge: {
          variant: 'secondary',
          text: '4.7'
        }
      },
      {
        name: 'Simple Line Icons',
        url: '/icons/simple-line-icons',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Notifications',
    url: '/notifications',
    icon: 'icon-bell',
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts',
        icon: 'icon-bell'
      },
      {
        name: 'Badges',
        url: '/notifications/badges',
        icon: 'icon-bell'
      },
      {
        name: 'Modals',
        url: '/notifications/modals',
        icon: 'icon-bell'
      }
    ]
  },
  {
    name: 'Widgets',
    url: '/widgets',
    icon: 'icon-calculator',
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'HR',
  },
  {
    name: 'HR performance',
    url: '/hrPerformance',
    icon: 'icon-layers',
    children: [
      {
        name: 'Performance Appraisal',
        url: '/hrPerformance/appraisal',
        icon: 'icon-loop'
      },
    ]
  },
  {
    name: 'Profiles',
    url: '/profiles',
    icon: 'icon-loop'
  },
  {
    name: 'Privileges',
    url: '/privileges',
    icon: 'icon-loop'
  },
  {
    name: 'Accounting',
    url: '/accounting',
    icon: 'icon-loop'
  },
  {
    name: 'Payroll',
    url: '/payroll',
    icon: 'icon-tag'
  },
  {
    name: 'Reports',
    url: 'report',
    icon: 'icon-loop'
  },
  {
    name: 'Settings',
    url: 'settings',
    icon: 'icon-settings'
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Performance',
  },
  {
    name: 'Review',
    url: '/review',
    icon: 'icon-layers',
  },
  {
    name: 'Promotion',
    url: '/promotion',
    icon: 'icon-plus',
  },
  {
    name: 'Resignation',
    url: '/resignation',
    icon: 'icon-minus',
  },
  {
    name: 'Termination',
    url: '/termination',
    icon: 'icon-trash',
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'icon-star'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'icon-star'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'icon-star'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Extras',
    url: '/extras',
    icon: 'icon-star',
    children: [
      {
        name: 'Search',
        url: '/search',
        icon: 'icon-star'
      },
      {
        name: 'FAQ',
        url: '/faq',
        icon: 'icon-star'
      },
      {
        name: 'Terms',
        url: '/terms',
        icon: 'icon-star'
      },
      {
        name: 'Privacy policy',
        url: '/privacyPolicy',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Disabled',
    url: '/dashboard',
    icon: 'icon-ban',
    attributes: { disabled: true },
  },

];
