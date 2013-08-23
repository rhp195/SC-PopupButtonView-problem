// ==========================================================================
// Project:   ToolbarProblem - mainPage
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*globals ToolbarProblem */

// This page describes the main user interface for your application.
ToolbarProblem.mainPage = SC.Page.design({

    // The main pane is made visible on screen as soon as your app is loaded.
    // Add childViews to this pane for views to display immediately on page
    // load.
    mainPane: SC.MainPane.design({
        childViews: ['toolbarView'],
        
        toolbarView: SC.ToolbarView.extend({
            layout: { height: 40 },
            childViews: ['menu1', 'menu2'],

            menu1: SC.PopupButtonView.extend({
                title: "My Menu1",
                layout: {left: 0, width: 100},
                menu: SC.MenuPane.create({
                    layout: {width: 100},
                    items: menuItems = [
                        { title: 'Menu1 Item1'},
                        { title: 'Menu1 Item2'}
                    ]
                })
            }),

            menu2: SC.PopupButtonView.extend({
                title: "My Menu2",
                layout: {left: 100, width: 100},
                menu: SC.MenuPane.create({
                    layout: {width: 100},
                    items: menuItems = [
                        { title: 'Menu2 Item1'},
                        { title: 'Menu2 Item2'}
                    ]
                })
            })
        })
    })
});
