<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Schema;
use BezhanSalleh\FilamentLanguageSwitch\LanguageSwitch;
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Model::unguard();
        Schema::defaultStringLength(191);
        LanguageSwitch::configureUsing(function (LanguageSwitch $switch) {
            $switch
                ->locales(['ar','en','fr']) // also accepts a closure
                ->visible(outsidePanels: true)
                ->outsidePanelRoutes([
                    'login',
                    // Additional custom routes where the switcher should be visible outside panels
                ]);
        });

    }
}
