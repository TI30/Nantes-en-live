<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Routing\Annotation\Route;

class SearchController extends AbstractController
{
    /**
     * @Route("/search", name="search")
     */
    public function index()
    {
        return $this->render('search/index.html.twig', [
            'controller_name' => 'SearchController',
        ]);
    }

    public function searchBar()
    {
        $form =  $this->createFormBuilder(NULL)
            ->add('query', TextType::class, [
                'attr' => [
                    'placeholder' => ' Recherche 🔎'
                ]
            ])
            ->add('search', SubmitType::class, [
                'attr' => [
                    'class' => 'button-search'
                ]
            ])
            ->getForm();

        return $this->render('search/search.html.twig', [
            'form' => $form->createView()
        ]);
    }
}
