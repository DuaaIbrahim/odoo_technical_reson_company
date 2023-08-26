# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.
{
    'name': 'Custom Stock Report',
    'summary': 'Add custom filters and sources to stock report',
    'version': '1.0',
    'category': 'Warehouse',
    'author': 'Duaa',
    'depends': ['base','stock','web','point_of_sale'],
    'data': [           
        'views/custom_stock_report_views.xml',
    ],
    'assets': {
        "web.assets_backend": [
            'custom_stock_report/static/src/js/custom_tree_filter.js',
            'custom_stock_report/static/src/xml/date_range.xml',
            ],
        
    },
    
    'installable': True,

}
