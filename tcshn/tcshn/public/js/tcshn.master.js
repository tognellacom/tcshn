tcshn = {
    grid: null,

    initgrid: function () {

        $(document).ready(function () {
            tcshn.grid = $(".gridster ul").gridster({
                widget_base_dimensions: [150, 150],
                autogenerate_stylesheet: true,
                min_cols: 1,
                max_cols: 6,
                widget_margins: [5, 5],
                resize: {
                    enabled: true
                },
                serialize_params: function ($w, wgd) {
                    return {
                        col: wgd.col,
                        row: wgd.row,
                        size_x: wgd.size_x,
                        size_y: wgd.size_y,
                        id: $($w).attr('id')
                    };
                }

            }).data('gridster');
            $('.gridster  ul').css({ 'padding': '0' });

            tcshn.grid.disable_resize()
            tcshn.grid.disable()
            
        });
    },
    shared: {
        s4: function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        },

        guid: function() {
            return (this.s4() + this.s4() + '-' + this.s4() + "-4" + this.s4().substr(0, 3) + "-" + this.s4() + "-" + this.s4() + this.s4() + this.s4()).toLowerCase();
        }
    }
}

tcshn.initgrid()

