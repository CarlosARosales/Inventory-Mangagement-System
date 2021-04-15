export default {
    items: [
        {
            id: 'navigation',
            title: 'Navigation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/dashboard/default',
                    icon: 'feather icon-home',
                },
                {
                    id: 'bootstrap',
                    title: 'Orders',
                    type: 'item',
                    icon: 'feather icon-server',
                    url: '/tables/bootstrap'
                },
                {
                    id: 'bootstrap',
                    title: 'Customers',
                    type: 'item',
                    url: '/customers',
                    icon: 'feather icon-user',
                },
                {
                    id: 'BillsTable',
                    title: 'Bills',
                    type: 'item',
                    url: '/bills',
                    icon: 'feather icon-credit-card',
                },
                {
                    id: 'Add-items',
                    title: 'Add Items',
                    type: 'item',
                    url: '/add-items',
                    icon: 'feather icon-plus',
                },

            ]
        },    
    ]
}