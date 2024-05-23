<?php

namespace App\Filament\Resources;

use App\Filament\Resources\UsersResource\Pages;
use App\Filament\Resources\UsersResource\RelationManagers;
use App\Models\Users;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\PasswordInput;
use Filament\Tables\Columns;
class UsersResource extends Resource
{
    protected static ?string $model = Users::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
        ->schema([
               TextInput::make('name')
                   ->label('Name')
                   ->required()
                   ->maxLength(25),

               Select::make('role')
                   ->label('Role')
                   ->required()
                   ->options([
                       'user' => 'User',
                       'admin' => 'Admin',
                   ])
                   ->default('user')
                   ->native(false),

               TextInput::make('email')
                   ->label('Email')
                   ->required()
                   ->email()
                   ->unique(ignoreRecord: true)
                   ->maxLength(25),

               FileUpload::make('photo')
                   ->label('Photo')
                   ->image()
                   ->directory('images/users')
                   ->visibility('public'),

                   TextInput::make('password')
                   ->label('Password')
                   ->password()
                   ->required()
                   ->minLength(8),

                   TextInput::make('confirmPassword')
                   ->label('Confirm Password')
                   ->password()
                   ->required()
                   ->same('password')
                   ->minLength(8),
           ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Columns\TextColumn::make('name')
                    ->label('Name')
                    ->searchable()
                    ->sortable(),

                Columns\TextColumn::make('email')
                    ->label('Email')
                    ->searchable(),
                Columns\TextColumn::make('role')
                    ->label('Role')
                    ->sortable(),

            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListUsers::route('/'),
            'create' => Pages\CreateUsers::route('/create'),
            'edit' => Pages\EditUsers::route('/{record}/edit'),
        ];
    }
}
