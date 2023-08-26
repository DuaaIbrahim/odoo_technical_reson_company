from odoo import api, fields, models

class report_cus_product(models.Model):

    _inherit = 'product.product'
    
    start_date = fields.Date(string="From date")
    end_date = fields.Date(string="To date")
    
    
    stock_move_location_usage = fields.Selection(string="Stock Move Location Usage", related='stock_move_ids.location_id.usage',  readonly=True)
    
    stock_move_ids = fields.One2many('stock.move','product_id',string='Stock Moves')
    
    def apply_date_filter(self):
        domain = [
            ('create_date', '>=', self.date_from),
            ('create_date', '<=', self.date_to),
        ]
        action = {
            'name': 'Filtered Data',
            'type': 'ir.actions.act_window',
            'view_mode': 'tree,form',
            'res_model': 'product.product',  
            'domain': domain,
        }
        return action
